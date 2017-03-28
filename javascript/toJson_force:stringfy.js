

           
			
var data = '{"product_info":"';
            for(var ipronores =0; ipronores< prodnoresult.length;ipronores++){
                data +=  prodnoresult[ipronores];
                data += ",";
            }
            data += '","props_prod":"';
            for(var iprodres =0; iprodres< prodresult.length;iprodres++){
                data +=  prodresult[iprodres];
                data += ",";
            }
            data += '","props_sku":"';
            for(var iskures =0; iskures< skuresult.length;iskures++){
                data +=  skuresult[iskures];
                data += ",";
            }
            data += '"}';
			
			
			
			
			
		    //Test for json.stringify
		               var result = {};
		               result.product_info = prodnoresult.toString();
		               result.props_prod = prodresult.toString();
		               result.props_sku = skuresult.toString();
		               var data = JSON.stringify(result);
		               console.log(result);
		               console.log(data);