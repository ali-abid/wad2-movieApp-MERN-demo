import Account from '../entities/Accounts';
import Genres from '../entities/Genres';

export default {
  registerGenres: async (id, name, { accountsRepository }) => {
    const genres = new Genres(id, name);
    return accountsRepository.persist(genres);
  },
  getGenres: (genresId, { accountsRepository }) => {
    return accountsRepository.get(genresId);
  },
  registerAccount: async (firstName, lastName, email, password, { accountsRepository, authenticator }) => {
    password = await authenticator.encrypt(password);
    const account = new Account(undefined, firstName, lastName, email, password);
    return accountsRepository.persist(account);
  },
  getAccount: (accountId, { accountsRepository }) => {
    return accountsRepository.get(accountId);
  },
  find: ({ accountsRepository }) => {
    return accountsRepository.find();
  },
  findByEmail: (email, { accountsRepository }) => {
    return accountsRepository.getByEmail(email);
  },
  authenticate: async (email, password, { accountsRepository, authenticator, tokenManager }) => {
    const account = await accountsRepository.getByEmail(email);
    const result = await authenticator.compare(password, account.password);
    if (!result) {
      throw new Error('Bad credentials');
    }
    const token = tokenManager.generate({ email: account.email });
    return token;
  },

  getFavourites: async (accountId, { accountsRepository }) => {
    const account = await accountsRepository.get(accountId);
    return account.favourites;
  },

  addFavourite: async (accountId, movieId, { accountsRepository }) => {
    //console.log("Service Call Account Id:", accountId);
    const account = await accountsRepository.get(accountId);
    account.favourites.push(movieId);
    console.log("Service Call Account:", account);
    return await accountsRepository.merge(account);
  },

  addFavouriteByEmail: async (accountEmail, movieId, { accountsRepository }) => {
    //console.log("Service Call Account Email:", accountEmail);
    const acc = await accountsRepository.getByEmail(accountEmail);
    //console.log("Service Call Get full account:", acc);
    //console.log("Service Call Get Email from account:", acc.email);
    acc.favourites.push(movieId);
    //console.log("Service Call Get Favourite:", acc.favourites);
    console.log("Service Call acc:", acc);
    return await accountsRepository.merge(acc);

  },


  verifyToken: async (token, { accountsRepository, tokenManager }) => {
    const decoded = await tokenManager.decode(token);
    const user = await accountsRepository.getByEmail(decoded.email);
    if (!user) {
      throw new Error('Bad token');
    }
    return user.email;
  }

};