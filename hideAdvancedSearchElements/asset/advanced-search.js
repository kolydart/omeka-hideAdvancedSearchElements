jQuery(document).ready(function($) {
   
  /** 
   * remove unwanted elements
   * edit this to add/remove elements
   * see following examples
   * 
   * @todo create configuration for this
   */

  /**
   * remove item-sets
   */
  $("#item-sets").remove();

  /**
   * remove resource-class
   */
  $("#resource-class").remove();


  /**
   * remove last element
   */
  $("form#advanced-search > div.advanced-search-content > div.field").last().remove();

  /** filter out all values from select, except the ones we use (disabled) */
  /*
  $("#property-queries .value select.query-property option")
  .not("\
    option[value=1], \
    option[value=2], \
    option[value=3], \
    option[value=4], \
    option[value=6], \
    option[value=7], \
    option[value=8], \
    option[value=9], \
    option[value=17], \
    option[value=20], \
    option[value=25], \
    option[value=33], \
    option[value=35], \
    option[value=48], \
    option[value=57], \
    option[value=91], \
    option[value=106], \
    option[value=112], \
    option[value=186], \
    option[value=187], \
    option[value=188], \
    option[value=189], \
    option[value=190], \
    option[value=191], \
    option[value=192], \
    option[value=193]")
  .remove();
  */

  /** 
   * change order; put templates first
   */
  $("#resource-templates").prependTo(".advanced-search-content");

});



