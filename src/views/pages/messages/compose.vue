<template>
  <div>
    <div>
      <div class="message_wrap">
        <form action="" @submit.prevent="assignTask">
          <div class="mb-3">
            <!-- To Recepient -->
            <div class="d-flex search__box" style="gap: 20px">
              <span class="sender__to">To</span>
              <!-- <input type="text" class="form-control" placeholder="" /> -->
              <!-- <input
                type="text"
                class="form-control subject__input"
                v-model="dataObj.assigned_to"
                placeholder="Receiver"
                @keyup="getAllStarWarsPeople"
              /> -->
              <input
                type="text"
                class="form-control  subject__input"
                v-model="assigned_name"
                placeholder="Receiver"
                @keyup="getAllStarWarsPeople"
              />
              <!-- <vue-tags-input
              placeholder = "Enter Recipient(s)"
                v-model="tag"
                :tags="tags"
                @blur="getAllStaffs"
                @tags-changed="newTags => tags = newTags"
                />
                <ul class="bg-white ul__search list-unstyled shadow-sm">
                  <li class="" v-for="item in filteredStaff " :key="item.id" >
                    {{ item.name }}
                  </li>
                </ul> -->
            </div>
             <!-- Search Results -->
                <ul v-show="search_result" class="bg-white list-unstyled ul__search p-2 shadow-sm">
                  <li
                    @click="getUserId(product)"
                    class=""
                    v-for="product in filteredProducts"
                    :key="product.id"
                  >
                    {{ product.name }}
                  </li>
                  <li v-show="no_results">No results found</li>
                </ul>
              <!-- End of search Results  -->
          </div>
          <!-- Subject -->
          <div class="row mb-4">
            <div class="col-md-8">
              <label for="">Subject</label> <br />
              <input
                type="text"
                v-model="dataObj.title"
                class="form-control subject__input"
                placeholder="Subject"
              />
            </div>
            <div class="col-md-4">
              <label for="">Due Date</label>
              <input
                type="date"
                class="form-control subject__input"
                v-model="dataObj.due_date"
                placeholder="Choose Date"
              />
            </div>
          </div>
          <!-- Textarea -->
          <div class="form-group">
            <label for="">Task Description</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="7"
              required
              placeholder="Enter Message"
              v-model="dataObj.description"
            >
            </textarea>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div class="center">
              <div class="form-input">
                <div class="preview">
                  <img id="file-ip-1-preview" />
                </div>
                <label for="file-ip-1"
                  ><ion-icon name="attach"></ion-icon> Add Attachment</label
                >
                <input
                  type="file"
                  id="file-ip-1"
                  accept="image/*"
                  @change="showPreview($event)"
                />
              </div>
              <span v-if="image" class="text-secondary">
                {{ image.name }} ({{ size }}kb)
              </span>
            </div>
            <div class="send_document_wrap">
              <button class="" type="submit">
                Send Document <ion-icon name="send"></ion-icon>
              </button>
            </div>
          </div>
        </form>
      </div>
      
    </div>
  </div>
</template>


<script>
import helpers from "@/helpers/index.js";
import Swal from 'sweetalert2'
// import VueTagsInput from '@johmun/vue-tags-input';

export default {
  components: {
    // VueTagsInput,
  },
  data() {
    return {
      search: "",
      assigned_name: '',
      search_result: false,
      tag: "",
      tags: [],
      image: null,
      size: "",
      filteredProducts: [],
      no_results: false,
      dataObj: {
        title: "",
        description: "",
        assigned_to: "",
        due_date: "",
        doc: "",
      },
    };
  },
  methods: {
    showPreview(event) {
      var input = event.target;
      this.image = input.files[0];
      console.log(this.image);
      let getImageSize = this.image.size / 1024;
      this.size = Math.round(getImageSize);
    },
    async assignTask() {
      try {
        let res = await helpers.assignTask(this.dataObj);
        console.log(res);
        Swal.fire(`Done!`, `Message sent to ${this.assigned_name}`, "success");
      } catch (error) {
        console.log(error);
      }
    },
    async getUserId(product){
       this.dataObj.assigned_to = product.id;
       this.getSearchUser();
       this.search_result = false;
    },
    async getSearchUser(){
      try {
        let res = await helpers.getStaff(this.dataObj.assigned_to);
        console.log(res);
        this.staff = res;
        this.assigned_name = res.name
      } catch (error) {
        console.log(error);
      }
    },
    getAllStarWarsPeople() {
     if(this.assigned_name !== ''  ){
       const token = this.$store.getters.isLoggedIn;
      fetch("https://ibomdemo.africanapp.store/api/v1/admin/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((res) => {
          // console.log(res.data);
          if (this.assigned_name) {
            this.filteredProducts = res.data.users.filter((product) =>
              product.name
                .toLowerCase()
                .includes(this.assigned_name.toLowerCase())
            );
            // console.log(this.filteredProducts);
            if (this.filteredProducts.length === 0 ) {
              this.no_results = true
            }
            else{
              this.no_results = false
            }
            this.search_result = true;
          } else {
            this.search_result = false;
          }
        });
     }
     else{
        this.search_result = false
     }
    },
  },
};
</script>

<style scoped>

</style>

 