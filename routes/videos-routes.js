const router = require("express").Router();
const { ensureAuthenticated, ensureAuthorized } = require("../middleware/auth-middleware");
const {validationRules, validate} = require("../validations/video-validator");
const { addOne, removeOne, updateOne, getAll, getOne, getTopVideos } = require("../controllers/videos-controller");

router.get("/videos", async (req, res) => {  
    // #swagger.tags = ['Posts']
    	  
    await getAll(req, res);
});

router.get("/videos/top",  async (req, res) => {  
    // #swagger.tags = ['Posts']
        
    await getTopVideos(req, res);
  });

router.post("/videos", ensureAuthenticated, ensureAuthorized(["admin"]), validationRules(), validate, async (req, res) => {    
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/VideoModel" }
    } */  
    await addOne(req, res);
});

router.put("/videos/:id", ensureAuthenticated, ensureAuthorized(["admin"]), validationRules(), validate, async (req, res) => {    
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/VideoModel" }
    } */  
    await updateOne(req, res);
});

router.get("/videos/:id", async (req, res) => {  
    // #swagger.tags = ['Posts']  
    await getOne(req, res);
});

router.delete("/videos/:id", ensureAuthenticated, ensureAuthorized(["admin"]), async (req, res) => {    
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    */  
    await removeOne(req, res);
});

module.exports = router;