<template>
  <div>
    <div>
      <div class="message_wrap">
        <form action="">
          <div class="mb-3">
            <!-- To Recepient -->
            <div class="d-flex" style="gap: 20px">
              <span class="sender__to">To</span>
              <!-- <input type="text" class="form-control" placeholder="" /> -->
              <vue-tags-input
                placeholder="Enter Recipient(s)"
                v-model="tag"
                :tags="tags"
                @tags-changed="(newTags) => (tags = newTags)"
              />
            </div>
          </div>
          <!-- Subject -->
          <div class="row mb-4">
            <div class="col-md-8">
              <label for="">Subject</label> <br />
              <input
                type="text"
                class="form-control subject__input"
                placeholder="Subject"
              />
            </div>
            <div class="col-md-4">
              <label for="">Due Date</label>
              <input
                type="date"
                class="form-control subject__input"
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
import VueTagsInput from "@johmun/vue-tags-input";

export default {
  components: {
    VueTagsInput,
  },
  data() {
    return {
      tag: "",
      tags: [],
      image: null,
      size: "",
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
  },
};
</script>

 