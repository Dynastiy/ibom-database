<template>
  <div>
    <div class="user_onboarding_wrap">
      <h5>Personal Details</h5>

      <div class="registration_wrap mt-3">
        <form action="">
          <div class="row">
            <div class="col-md-4">
              <div class="form-group mx-2 mt-2">
                <label for="" class="py-2">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                  required
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group mx-2 mt-2">
                <label for="" class="py-2">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group mx-2 mt-2">
                <label for="" class="py-2">Work Email</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group mx-2 mt-2">
                <label for="" class="py-2">Phone Number</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group mx-2 mt-2">
                <label for="" class="py-2">Date of Birth</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="dd-mm-yy"
                  required
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group mx-2 mt-2">
                <label for="exampleFormControlSelect1" class="py-2"
                  >Gender</label
                >
                <select
                  class="form-control option-class select"
                  id="exampleFormControlSelect1"
                  required
                >
                  <option class="colour" id="selectCountry">Male</option>
                  <option class="colour" id="selectCountry">Female</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group mx-2 mt-2">
                <label for="exampleFormControlSelect1" class="py-2"
                  >Marital Status</label
                >
                <select
                  class="form-control option-class select"
                  id="exampleFormControlSelect1"
                  required
                >
                  <option class="colour" id="selectCountry">Single</option>
                  <option class="colour" id="selectCountry">Married</option>
                  <option class="colour" id="selectCountry">Divorced</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group mx-2 mt-2">
                <label for="exampleFormControlSelect1" class="py-2"
                  >Religion</label
                >
                <select
                  class="form-control option-class select"
                  id="exampleFormControlSelect1"
                  required
                >
                  <option class="colour" id="selectCountry">Christian</option>
                  <option class="colour" id="selectCountry">Muslim</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group mx-2 mt-2">
                <label for="exampleFormControlSelect1" class="py-2"
                  >States Of Origin</label
                >
                <select
                  class="form-control option-class select"
                  id="exampleFormControlSelect1"
                  required
                >
                  <option class="colour" id="selectCountry">Abuja</option>
                  <option class="colour" id="selectCountry">Akwa-Ibom</option>
                  <option class="colour" id="selectCountry">Lagos</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group mx-2 mt-2">
                <label for="exampleFormControlSelect1" class="py-2"
                  >L.G.A</label
                >
                <select
                  class="form-control option-class select"
                  id="exampleFormControlSelect1"
                  required
                >
                  <option class="colour" id="selectCountry">Uyo</option>
                  <option class="colour" id="selectCountry">Etinan</option>
                  <option class="colour" id="selectCountry">Ikot-Ekpene</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group mx-2 mt-2">
                <label for="" class="py-2">Next of kin name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter name of next of kin"
                  required
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group mx-2 mt-2">
                <label for="" class="py-2">Home Address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your home address"
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      <!-- Work/Bank Details -->
      <div class="mt-4">
        <h5>Work/Bank Details</h5>
        <form action="">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group mx-2 mt-2">
                <label for="" class="py-2">Staff ID</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Staff id"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mx-2 mt-2">
                <label for="" class="py-2">Office</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Office"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mx-2 mt-2">
                <label for="exampleFormControlSelect1" class="py-2"
                  >Department</label
                >
                <select
                  class="form-control option-class select"
                  id="exampleFormControlSelect1"
                  required
                >
                  <option class="colour" id="selectCountry">Marketing</option>
                  <option class="colour" id="selectCountry">
                    Web Development
                  </option>
                  <option class="colour" id="selectCountry">
                    Digital Marking
                  </option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mx-2 mt-2">
                <label for="exampleFormControlSelect1" class="py-2">Role</label>
                <select
                  class="form-control option-class select"
                  id="exampleFormControlSelect1"
                  required
                >
                  <option class="colour" id="selectCountry">Director</option>
                  <option class="colour" id="selectCountry">Manager</option>
                  <option class="colour" id="selectCountry">Secretary</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mx-2 mt-2">
                <label for="exampleFormControlSelect1" class="py-2"
                  >Year of Employment</label
                >
                <select
                  class="form-control option-class select"
                  id="exampleFormControlSelect1"
                  required
                >
                  <option class="colour" id="selectCountry">2020</option>
                  <option class="colour" id="selectCountry">2021</option>
                  <option class="colour" id="selectCountry">2022</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mx-2 mt-2">
                <label for="" class="py-2">Account Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Account Name"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mx-2 mt-2">
                <label for="" class="py-2">Account Number</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your account number"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mx-2 mt-2">
                <label for="exampleFormControlSelect1" class="py-2">Bank</label>
                <select
                  class="form-control option-class select"
                  id="exampleFormControlSelect1"
                  required
                >
                  <option class="colour" id="selectCountry">First Bank</option>
                  <option class="colour" id="selectCountry">UBA</option>
                  <option class="colour" id="selectCountry">Access Bank</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

