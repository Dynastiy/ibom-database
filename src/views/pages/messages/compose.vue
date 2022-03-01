<template>
  <div>
    <div>
      <div class="message_wrap">
        <form action="" @submit.prevent="assignTask">
          <div class="mb-3">
            <!-- To Recepient -->
            <div class="d-flex" style="gap: 20px">
              <span class="sender__to">To</span>
              <!-- <input type="text" class="form-control" placeholder="" /> -->
              <input type="text" class="form-control subject__input" v-model="dataObj.assigned_to" placeholder="Receiver" /> 
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
          </div>
          <!-- Subject -->
          <div class=" row mb-4">
              <div class="col-md-8">
                <label for="">Subject</label> <br>
                <input type="text" v-model="dataObj.title" class="form-control subject__input" placeholder="Subject" /> 
              </div>
              <div class="col-md-4">
                <label for="">Due Date</label>
                <input type="date" class="form-control subject__input" v-model="dataObj.due_date" placeholder="Choose Date" />
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
import helpers from '@/helpers/index.js'
// import VueTagsInput from '@johmun/vue-tags-input';

export default {
  components: {
    // VueTagsInput,
  },
  data() {
    return {
      search: '',
      tag: '',
      tags: [],
      image: null,
      size: '',
      filteredStaff: [],
      dataObj:{
        title: '',
      description: '',
      assigned_to: '',
      due_date: '',
      doc: '',
      }
    };
  },
  methods: {
    showPreview(event){
          var input = event.target;
          this.image = input.files[0];
          console.log(this.image);
          let getImageSize = this.image.size/1024;
          this.size = Math.round(getImageSize);
    },
    async assignTask(){
      try {
        let res = await helpers.assignTask(this.dataObj)
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style scoped>
.ul__search{
  position: absolute;
  /* top: 0; */
  width: 30%;
  z-index: 999;
  transition: 2s;
}
.search__box{
  position: relative;
}
.ul__search li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}
.ul__search li a {
    color: #000;
    font-size: 0.8rem;
    display: block;
    padding: 0.5rem;
}
.ul__search  li a:hover{
  text-decoration: none;
  background: #fae4ba25;
  
}
</style>

 