const { Schema, model } = require("mongoose");

const UserSchema = new Schema (
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default: "no-image.png",

        },
        role: {
            type: String,
            default: "user",
            enum: ["user", "admin"],
        },
        password: {
            type: String,
            required: true,
        },
        verificationCode: {
            type: Number,
        },
        isEmailVerified: {
            type: Boolean,
            default: false,
        },
        passwordResetCode: {
            type: String,
        }  
    },
    { timestamps: true }
);

module.exports = model("User", UserSchema);