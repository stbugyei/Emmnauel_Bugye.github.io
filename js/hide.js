	/*!responsiveslides */
	
	<script>
		$(function () {
		  $("#slider").responsiveSlides({
			auto: true,
			pager: false,
			nav: true,
			speed: 500,
			maxwidth: 960,
			namespace: "centered-btns"
		  });
		});
	</script>
		
   /*!Hide jquery*/
   
   <script>
		$(document).ready(function(){
		 $("#testimonials").click(function(){
          $(this).hide();
		});
	 });
  </script>