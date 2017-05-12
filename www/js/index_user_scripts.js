/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Fototipo l */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_1"); 
         return false;
    });
    
        /* button  .uib_w_2 */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_2"); 
         return false;
    });
    
        /* button  .uib_w_3 */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_3"); 
         return false;
    });
    
        /* button  .uib_w_4 */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_4"); 
         return false;
    });
    
        /* button  .uib_w_5 */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_5"); 
         return false;
    });
    
        /* button  .uib_w_6 */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_6"); 
         return false;
    });
    
        /* button  .uib_w_12 */
    $(document).on("click", ".uib_w_12", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_37_72"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
