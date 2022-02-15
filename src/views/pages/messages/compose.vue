<template>
  <div>
    <div>
      <div class="message_wrap">
        <form action="">
          <div class="mb-3">
            <!-- To Recepient -->
            <div class="d-flex" style="gap:20px">
              <span class="sender__to">To</span>
              <!-- <input type="text" class="form-control" placeholder="" /> -->
              <vue-tags-input
              placeholder = "Enter Recipient(s)"
                v-model="tag"
                :tags="tags"
                @tags-changed="newTags => tags = newTags"
                />
            </div>
          </div>
          <!-- Subject -->
          <div class="form-group mb-4">
            <div class="d-flex subject__input">
              <input type="text" class="form-control" placeholder="Subject" />
            </div>
          </div>
          <!-- Textarea -->
          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="7"
              required
              placeholder="Enter Message"
            >
            </textarea>
          </div>
          <div class="d-flex align-items-center justify-content-between">
             <div class="center">
                <div class="form-input">
                  <div class="preview">
                    <img id="file-ip-1-preview">
                  </div>
                  <label for="file-ip-1"><ion-icon name="attach"></ion-icon>  Add Attachment</label>
                  <input type="file" id="file-ip-1" accept="image/*" @change="showPreview($event);">
                </div>
                <span v-if="image" class="text-secondary"> {{ image.name }} ({{ size }}kb) </span>
              </div>
            <div>
              <button class="" type="submit">  Send Document <ion-icon name="send"></ion-icon></button>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>


<script>
import VueTagsInput from '@johmun/vue-tags-input';

export default {
  components: {
    VueTagsInput,
  },
  data() {
    return {
      tag: '',
      tags: [],
      image: null,
      size: '',
    };
  },
  methods: {
   showPreview(event){
        var input = event.target;
        this.image = input.files[0];
        console.log(this.image);
        let getImageSize = this.image.size/1024;
        this.size = Math.round(getImageSize);
  // if($event.target.files.length > 0){
  //   var src = URL.createObjectURL(event.target.files[0]);
  //   var preview = document.getElementById("file-ip-1-preview");
  //   preview.src = src;
  //   preview.style.display = "block";
  // }
      },
  },
};
</script>

 