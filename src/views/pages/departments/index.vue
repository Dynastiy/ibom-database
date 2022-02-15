<template>
  <div>
    <div class="department">
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button
                class="department__button btn-block text-left"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <span class="d-flex justify-content-between">
                  <span>Department Name</span>
                  <span> <ion-icon name="arrow-dropdown"></ion-icon> </span>
                </span>
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              Some placeholder content for the first accordion panel. This panel
              is shown by default, thanks to the <code>.show</code> class.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import helpers from "@/helpers/index.js"
export default {
    data(){
        return{
            department:[]
        }
    },
    methods:{
        async getDepartments(){
            let res = await helpers.getDepartments();
            console.log(res);
        }
    },
    async created(){
        this.getDepartments()
    }
}
</script>