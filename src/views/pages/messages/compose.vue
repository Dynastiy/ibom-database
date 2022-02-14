<template>
  <div>
    <div>
      <h1 class="text-white">Send a New Message</h1>
      <div class="message_wrap">
        <form action="">
          <div class="form-group">
            <!-- To Recepient -->
            <div class="d-flex">
              <p>To</p>
              <input type="text" class="form-control" placeholder="" />
            </div>
          </div>
          <!-- Subject -->
          <div class="form-group">
            <div class="d-flex">
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
            >
            </textarea>
          </div>
          <button class="btn btn-success" type="submit">Send</button>
          <!-- <div class="custom-file mb-3">
            <input type="file" id="validatedCustomFile" />
          </div> -->
        </form>
      </div>
    </div>
  </div>
</template>