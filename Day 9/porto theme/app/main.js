const slider_container = document.querySelector(".owl-stage");
sliders_data.map((slider_data) => {
  slider_container.innerHTML += `

  <div class="owl-item position-relative"
  style="background-image: url(${slider_data.slider_bg_image}); background-color:${slider_data.slider_bg_color}; background-size: cover; background-position: center; background-blend-mode: darken;">
  <div class="container position-relative z-index-1 h-100">
      <div class="d-flex flex-column align-items-center justify-content-center h-100">
          <h3 class="position-relative text-color-light text-5 line-height-5 font-weight-medium px-4 mb-2 appear-animation"
              data-appear-animation="fadeInDownShorter"
              data-plugin-options="{'minWindowWidth': 0}">
              <span
                  class="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
                  <img src="img/slides/slide-title-border.png" class="w-auto appear-animation"
                      data-appear-animation="fadeInLeftShorter"
                      data-appear-animation-delay="250"
                      data-plugin-options="{'minWindowWidth': 0}" alt="" />
              </span>
              ${slider_data.sub_title}
              <span
                  class="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
                  <img src="img/slides/slide-title-border.png" class="w-auto appear-animation"
                      data-appear-animation="fadeInRightShorter"
                      data-appear-animation-delay="250"
                      data-plugin-options="{'minWindowWidth': 0}" alt="" />
              </span>
          </h3>
          <h1 class="text-color-light font-weight-extra-bold text-12 mb-3 appear-animation"
              data-appear-animation="blurIn" data-appear-animation-delay="500"
              data-plugin-options="{'minWindowWidth': 0}">${slider_data.title}</h1>
          <p class="text-4 text-color-light font-weight-light opacity-7 mb-0"
              data-plugin-animated-letters
              data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0}">${slider_data.slider_content}</p>
      </div>
  </div>
</div>
        
    `;
});

// home our features
const our_features_section = document.querySelector(".featurs-section_inner");
our_features.map((feature) => {
  our_features_section.innerHTML += `
    <div class="col-sm-6">
        <div class="feature-box feature-box-style-2">
            <div class="feature-box-icon">
            ${feature.icon}
            </div>
            <div class="feature-box-info">
                <h4 class="font-weight-bold text-4-5 mb-1">${feature.title}</h4>
                <p> ${feature.paragraph}</p>
            </div>               
        </div>               
     </div>               
    `;
});

// our customer section
const our_customer_section = document.querySelector(".our_customer_section");
our_customers_data.map((customer) => {
  our_customer_section.innerHTML += `
        <div class="customer_item">
			<img class="img-fluid" src="${customer.customer_logo}" alt="">
		</div>
    
    `;
});

// home testomonial section
const testomonial_section = document.querySelector(".testimonial_section_inner");
testomonials_data.map((testomonial) => {
  testomonial_section.innerHTML += `
                <div class="testimonial_item">
                <div class="col">
                    <div class="testimonial testimonial-primary text-center">
                        <blockquote class="pt-5 pb-5">
                            <p class="mb-0 pt-2 pb-2">${testomonial.tes_content}</p>
                        </blockquote>
                        <div class="testimonial-arrow-down mx-auto"></div>
                        <div class="testimonial-author justify-content-center mx-auto text-center">
                            <div class="testimonial-author-thumbnail">
                                <img src="${testomonial.client_image}" class="rounded-circle"
                                    alt="" />
                            </div>
                            <p><strong>${testomonial.client_name}</strong><span>${testomonial.client_title}</span></p>
                        </div>
                    </div>
                </div>
            </div>
     `;
});
