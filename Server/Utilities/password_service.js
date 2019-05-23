const bcrypt = require("bcrypt");
const saltrounds = process.env.saltrounds || 10;

module.exports = {
    hashPassword: async myPlainTextPassword => {
        try {
            let hashed = await bcrypt.hash
            (myPlainTextPassword, saltrounds)
        return hashed
        } catch(error){
            if(error) throw error
        }
    },

    // checkpassword:
};

