import React from 'react'

function FAQ() {
  return (
    <div className='w-75 mt-5 container d-flex justify-content-center align-items-center'>
        
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        BlogShare kulllanmak için ücret ödemeliyim?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
                Hayır. BlogShare platformunu kullanmak için herhangi bir ücret ödemenize gerek yoktur.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            İstediğim kadar blog oluşturabilir miyim?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Evet, dilediğiniz kadar blog oluşturabilirsiniz.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        BlogShare'i kullanmak istemediğim zaman hesabımı silebilirmiyim?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        BlogShare'i kullanmak istemediğiniz zaman hesabınızı silebilirsiniz.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default FAQ