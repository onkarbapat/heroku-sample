var _ = require("underscore");

var RecipeDAO =  (function() {
    var dummydata = [];
    var ingredient_list=[];;
    return function()
    {
        this.getDummy = function (){
            return dummydata;
        }

        this.getIngredients = function ()
        {
            return ingredient_list;
        }
        
    };    
    
})();

    RecipeDAO.addRecipe=function (data){
          new RecipeDAO().getDummy().push(data);
          var current_list=new RecipeDAO().getIngredients();
          _.each(data.ingredients,function(ingredient){
                if ((_.contains(this,ingredient.toLowerCase()))===false)
                    this.push(ingredient.toLowerCase());
          },current_list);

    }  
    
    RecipeDAO.getRecipe=function (){
          return new RecipeDAO().getDummy();
    }
    
    RecipeDAO.searchRecipe=function (ind,callback){
    var result=[];
    var flag=[];
    var major_flag=true;
    var dummydata=RecipeDAO.getRecipe();
    console.log(dummydata);    
    for (var i=0 ; i<dummydata.length;i++)
    {   

        for (var k=0;k<ind.length;k++)
        {
              
            for (var j=0; j<dummydata[i].ingredients.length; j++)
            {
                //console.log(i); 
                if (dummydata[i].ingredients.length==ind.length)
                {
                    if (dummydata[i].ingredients[j].toLowerCase()==ind[k].toLowerCase())
                      {
                        flag[k]=true;
                        break;
                      } 
                      
                }
                else
                {
                    flag[k]=false
                    break;
                }
                flag[k]=false;
            }

            if (flag[k]===false)
              break;
        }

        
        for (var l=0;l<flag.length;l++)
          {
            if (flag[l])
              continue;
            else
            {
              major_flag=false;
              break;
            }
          }

        if (major_flag===true)
          result[result.length]=dummydata[i];   
          
        major_flag=true;
    }

    console.log(result+"returning data");
    console.log(result);
    callback(result);
        
    }

RecipeDAO.init=function ()
{
RecipeDAO.addRecipe({title:"Solkadhi",ingredients:['Coconut Milk','Kokum'],steps:"1.soak the kokums in half cup of water for 30 minutes.\n2. crush and squeeze kokum completely with your hands."+
"\n3. you will get a nice pinkish red kokum extract"+
"\n4.add 2 cups water to the kokum extract."+
"\n5.also add 2 cups coconut milk - either make the coconut milk or use the ready made one - see notes below to make the coconut milk at home."+
"\n6.add salt and stir. keep aside so that we prepare the tempering."+
"\n7.heat oil."+
"\n8.splutter the mustard seeds."+
"\n9.then add the cumin and let them sizzle too."+
"\n10.finally add the garlic, asafoetida, red chilies, curry leaves."+
"\n11.fry these for a half a minute."+
"\n12.quickly pour this tempering on the kokum coconut milk mixture."+
"\n13.serve straight way or serve cold."+
"\n14.garnish with coriander leaves before serving." });
RecipeDAO.addRecipe({title:"Solkadhi 2",ingredients:['Coconut Milk','Kokum'],steps:"1.soak the kokums in half cup of water for 30 minutes.\n2. crush and squeeze kokum completely with your hands."+
"\n3. you will get a nice pinkish red kokum extract"+
"\n4.add 2 cups water to the kokum extract."+
"\n5.also add 2 cups coconut milk - either make the coconut milk or use the ready made one - see notes below to make the coconut milk at home."+
"\n6.add salt and stir. keep aside so that we prepare the tempering."+
"\n7.heat oil."+
"\n8.splutter the mustard seeds."+
"\n9.then add the cumin and let them sizzle too."+
"\n10.finally add the garlic, asafoetida, red chilies, curry leaves."+
"\n11.fry these for a half a minute."+
"\n12.quickly pour this tempering on the kokum coconut milk mixture."+
"\n13.serve straight way or serve cold."+
"\n14.garnish with coriander leaves before serving." });
RecipeDAO.addRecipe({title:"Solkadhi 3",ingredients:['Coconut Milk','Kokum'],steps:"1.soak the kokums in half cup of water for 30 minutes.\n2. crush and squeeze kokum completely with your hands."+
"\n3. you will get a nice pinkish red kokum extract"+
"\n4.add 2 cups water to the kokum extract."+
"\n5.also add 2 cups coconut milk - either make the coconut milk or use the ready made one - see notes below to make the coconut milk at home."+
"\n6.add salt and stir. keep aside so that we prepare the tempering."+
"\n7.heat oil."+
"\n8.splutter the mustard seeds."+
"\n9.then add the cumin and let them sizzle too."+
"\n10.finally add the garlic, asafoetida, red chilies, curry leaves."+
"\n11.fry these for a half a minute."+
"\n12.quickly pour this tempering on the kokum coconut milk mixture."+
"\n13.serve straight way or serve cold."+
"\n14.garnish with coriander leaves before serving." });
RecipeDAO.addRecipe({title:"Chicken Biryani",ingredients:['chicken','onion','rice','potato','yogurt'],steps:"In a large skillet, in 2 tablespoons vegetable oil (or ghee) fry potatoes until brown, drain and reserve the potatoes. Add remaining 2 tablespoons oil to the skillet and fry onion, garlic and ginger until onion is soft and golden. Add chili, pepper, turmeric, cumin, salt and the tomatoes. Fry, stirring constantly for 5 minutes. Add yogurt, mint, cardamom and cinnamon stick. Cover and cook over low heat, stirring occasionally until the tomatoes are cooked to a pulp. It may be necessary to add a little hot water if the mixture becomes too dry and starts to stick to the pan."+
"\nWhen the mixture is thick and smooth, add the chicken pieces and stir well to coat them with the spice mixture. Cover and cook over very low heat until the chicken is tender, approximately 35 to 45 minutes. There should only be a little very thick gravy left when chicken is finished cooking. If necessary cook uncovered for a few minutes to reduce the gravy."+
"\nWash rice well and drain in colander for at least 30 minutes."+
"\nIn a large skillet, heat vegetable oil (or ghee) and fry the onions until they are golden. Add saffron, cardamom, cloves, cinnamon stick, ginger and rice. Stir continuously until the rice is coated with the spices."+
"\nIn a medium-size pot, heat the chicken stock and salt. When the mixture is hot pour it over the rice and stir well. Add the chicken mixture and the potatoes; gently mix them into the rice. Bring to boil. Cover the saucepan tightly, turn heat to very low and steam for 20 minutes. Do not lift lid or stir while cooking. Spoon biryani onto a warm serving dish."});
RecipeDAO.addRecipe({title:"Aloo ki Subji",ingredients:['Potato','Capsicum','Onion']});
RecipeDAO.addRecipe({title:"Chicken Biyani",ingredients:['Chicken','Rice','Onion']});

}
exports.RecipeDAO=RecipeDAO;