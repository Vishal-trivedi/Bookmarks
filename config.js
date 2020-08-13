module.exports = {
    port: 5000,
    mongouri: 'mongodb://localhost:27017/bookmarkApp',
    mongoOption: {
      useNewUrlParser: true,
      useCreateIndex:true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  };
  