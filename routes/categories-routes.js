const router = require("express").Router();
const { ensureAuthenticated, ensureAuthorized } = require("../middleware/auth-middleware");
const {validationRules, validate} = require("../validations/category-validator");
const { addOne, removeOne, updateOne, getAll, getOne } = require("../controllers/categories-controller");

router.get("/categories", async (req, res) => {  
    // #swagger.tags = ['Posts']
    	  
    await getAll(req, res);
});

router.post("/categories", ensureAuthenticated, ensureAuthorized(["admin"]), validationRules(), validate, async (req, res) => {    
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/CategoryModel" }
    } */  
    await addOne(req, res);
});

router.put("/categories/:id", ensureAuthenticated, ensureAuthorized(["admin"]), validationRules(), validate, async (req, res) => {    
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/CategoryModel" }
    } */  
    await updateOne(req, res);
});

router.get("/categories/:id", async (req, res) => {  
    // #swagger.tags = ['Posts']  
    await getOne(req, res);
});

router.delete("/categories/:id", ensureAuthenticated, ensureAuthorized(["admin"]), async (req, res) => {    
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    */  
    await removeOne(req, res);
});

module.exports = router;