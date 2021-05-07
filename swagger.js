const swaggerAutogen = require("swagger-autogen")()

const doc = {
    info: {
        version: "1.0.0",
        title: "Rocktech (Video and News App) API",
        description: "API for the tutorial on building mobile app by <b>Mark's Coding Spot</b> using NodeJS."
    },
    host: "localhost:5000",
    basePath: "/",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
        {
            "name": "Auth",
            "description": "Auth endpoints"
        },
        {
            "name": "Admin",
            "description": "Admin endpoints"
        },
        {
            "name": "Posts",
            "description": "Posts endpoints"
        },
        {
            "name": "Profile",
            "description": "User profile endpoints"
        },
    ],
    securityDefinitions: {
        Authorization: {
            type: "apiKey",
            name: "Authorization",
            description: "Value: Bearer ",
            in: "header",
            scheme: 'bearer'
        }
    },
    definitions: {
        LoginModel: {
            $email: "admin@markscodingspot.com",
            $password: "Password123#",            
        },
        RegisterModel: {
            $name: "John Snow",
            $email: "mail@mail.com",
            $password: "Password123#", 
        },
        UpdateUserModel: {
            $name: "John Snow",
        },
        CategoryModel: {
            $title: "Comedy",
        },
        StoryModel: {
            $category: "6064e654b5c7475bac63ad22",
            $title: "Elon Musk Admits He Wants to Travel to Mars Because No One Hates Him There Yet",
            $body: "AUSTIN, Texas — Wiping tears from his eyes at a recent press conference, SpaceX CEO Elon Musk revealed that the reason he’s so keen on traveling to Mars is not for the potential benefits to science, but because it’s the one place he can think of where no one hates him yet.",
        },
        VideoModel: {
            $videoId: "QWhJqvuB1ZA",
            $title: "Welcome To America with Gad Elmaleh and Ron Livingston",            
        },
        CommentModel: {
            $story: "606576d16bb28e33ecf2872c",
            $body: "That's very funny (:",
        },
        VerifyEmailModel: {
            $code: 333333,
        }, 
        ChangePasswordModel: {
            $oldPassword: "Password123#",
            $newPassword: "Password789#",
        }, 
        ForgotPassWordModel: {
            $email: "coommark@gmail.com",
        },
        ResetPasswordModel: {
            $email: "coommark@gmail.com",
            $code: 999999,
            $newPassword: "Password789#",
        }
    }
};

const outputFile = "./swagger_output.json";
const endpointFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointFiles, doc).then(() => {
    require("./index");
});