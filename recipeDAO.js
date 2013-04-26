var RecipeDAO =  function() {};

RecipeDAO.prototype.dummydata = [];

RecipeDAO.prototype.getRecipe = function(ind) {
    //lookup the array
    //console.log(this.dummydata);
    //to-do : maintain hashmap and lookup
    var result=[];
    var flag=[];
    var major_flag=true;
    
    for (var i=0 ; i<this.dummydata.length;i++)
    {   

        for (var k=0;k<ind.length;k++)
        {
              
            for (var j=0; j<this.dummydata[i].ingredients.length; j++)
            {
                //console.log(i); 
                if (this.dummydata[i].ingredients.length==ind.length)
                {
                    if (this.dummydata[i].ingredients[j]==ind[k])
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
          result[result.length]=this.dummydata[i];   
          
        major_flag=true;
    }
    return result;
};

RecipeDAO.prototype.fillInData = function(data) {
  this.dummydata[this.dummydata.length] = data;
};

RecipeDAO.prototype.init = function()
{
  RecipeDAO.prototype.fillInData({
        title:'Chicken Biryani',
      duration:15,
      cusine:'indian',
      ingredients:['onion','rice','Chicken'],
      steps:'Lorem ipsum Proident in occaecat dolore sit dolore nulla reprehenderit pariatur officia officia nisi laboris esse sed aliqua amet dolore aliquip ullamcoin eu nulla reprehenderit magna consectetur ut in.'
    });
    
    RecipeDAO.prototype.fillInData({
        title:'Aloo Paratha',
        duration:30,
      cusine:'indian',
      ingredients:['Potato','flour','salt'],
      steps:'Lorem ipsum Proident in occaecat dolore sit dolore nulla reprehenderit pariatur officia officia nisi laboris esse sed aliqua amet dolore aliquip ullamcoin eu nulla reprehenderit magna consectetur ut in.Lorem'
    });

  RecipeDAO.prototype.fillInData({
        title:'Aloo ki Subji',
        duration:30,
      cusine:'indian',
      ingredients:['Potato','onion','salt'],
      steps:'Lorem ipsum Proident in occaecat dolore sit dolore nulla reprehenderit pariatur officia officia nisi laboris esse sed aliqua amet dolore aliquip ullamcoin eu nulla reprehenderit magna consectetur ut in.Lorem'
    });
    
  RecipeDAO.prototype.fillInData({
        title:'Veg Biryani',
        duration:30,
      cusine:'indian',
      ingredients:['Potato','onion','rice'],
      steps:'Lorem ipsum Proident in occaecat dolore sit dolore nulla reprehenderit pariatur officia officia nisi laboris esse sed aliqua amet dolore aliquip ullamcoin eu nulla reprehenderit magna consectetur ut in.Lorem'
    });
    
    
  RecipeDAO.prototype.fillInData({
        title:'Veg Biryani 2',
        duration:30,
      cusine:'indian',
      ingredients:['Potato','onion','rice'],
      steps:'Lorem ipsum Proident in occaecat dolore sit dolore nulla reprehenderit pariatur officia officia nisi laboris esse sed aliqua amet dolore aliquip ullamcoin eu nulla reprehenderit magna consectetur ut in.Lorem'
    });
};

new RecipeDAO().init();

exports.RecipeDAO=RecipeDAO;



