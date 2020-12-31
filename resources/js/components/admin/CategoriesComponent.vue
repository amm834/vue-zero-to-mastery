<template>
  <div>
    <!-- Create Category Action -->
    <div>
      <!-- Create Button -->
      <b-button id="show-btn" @click="showModal" variant="success" class="float-right my-3"><i class="fa fa-plus d-inline mx-1"></i>Create</b-button>
      <!-- Create Modal -->
      <b-modal ref="my-modal" hide-footer title="Create A New Category">
        <!-- Category Create Form -->
        <form @submit.prevent="createCategory">
          <img src="" alt="404 not found!" ref="displayImage" v-show="category.image.name" class="img-fluid my-3" />
          <div class="mb-3">
            <label for="title" class="form-label"
              >Title</label>
            <input type="text" class="form-control" id="title"
            v-model="category.title"
            :class="errors.title ? 'is-invalid' : ''"
            >
            <p v-if="errors.title" :class="errors.title ? 'invalid-feedback' : ''">
              {{errors.title[0]}}
            </p>
          </div>
          <!-- File Input -->
          <div class="mb-3 form-group">
            <label for="formFile" class="form-label">Choose Image</label>
            <input class="form-control" type="file" id="formFile"
            @change="uploadFile"
            :class="errors.image ? 'is-invalid' : ''"
            >
            <p v-if="errors.title" :class="errors.image ? 'invalid-feedback' : ''">
              {{errors.image[0]}}
            </p>

          </div>
          <!-- Form Footer -->
          <div class="row d-flex justify-content-end">
            <b-button class="mt-3" variant="outline-danger"  @click="hideModal">Cancel</b-button>
            <b-button class="mt-3 mx-3" variant="success"  @click="showModal" type="submit">Create</b-button>
          </div>
        </form>
      </b-modal>
      <!-- Create Modal End -->
    </div>
    <div class="table-responsive">
      <!-- Categories Table -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col" colspan="2" class="text-center">Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(category,index) in categories.data" :key="category.id"
            >
            <th scope="row">{{index+1}}</th>
            <td>{{category.title}}</td>
            <td>
              <td>
                <img :src="`${storagePath}/storage/${category.image}`" alt="" height="200" width="200">
              </td>
              <td>
                <b-button variant="outline-info" class="float-right">
                  <i class="fa fa-edit"></i>
                </b-button>
              </td>
              <td>
                <b-button variant="danger" @click="deleteCategory(category.id)">
                  <i class="fa fa-trash"></i>
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
      <pagination :data="categories" @pagination-change-page="showCategories" class="my-3"></pagination>

    </div>
  </template>

  <script>
    //import axios from 'axios'
    export default {
      data() {
        return {
          categories: {},
          category: {
            title: '',
            image: ''
          },
          errors: '',
          storagePath: `${serverPath}`
        }
      },
      methods: {
        showModal() {
          this.$refs['my-modal'].show();
        },
        hideModal() {
          this.$refs['my-modal'].hide()
        },
        createCategory() {
          // Create To DB
          let createCat = new FormData();
          createCat.append('title', this.category.title);
          createCat.append('image', this.category.image);
          axios.post(`${baseURL}/categories`, createCat)
          .then(res=> {
            this.hideModal();
            // If success show toast
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            Toast.fire({
              icon: 'success',
              title: 'New Category Created.'
            })
            this.showCategories();
          })
          .catch(err=> {
            // Show Errors if create fields are required!
            this.errors = err.response.data.errors;
          })
        },
        uploadFile(event) {
          // Get binary file from onchange event
          this.category.image = event.target.files[0];
          // File Reader
          let reader = new FileReader();
          /*reader.addEventListener('load', function(e) {
          this.$refs.displayImage.src = reader.result;
        }.bind(this), false);
*/
          reader.onload = (e)=> {
            this.$refs.displayImage.src = reader.result;
          }
          // Read As Image or Binary File
          reader.readAsDataURL(this.category.image);
        },
        // Show All Categories
        showCategories(page = 1) {
          axios.get(`${baseURL}/categories?page=${page}`)
          .then(res=> {
            this.categories = res.data;
          })
          .catch(err=> {
            console.log(err)
          })
        },
        deleteCategory(id) {

          Swal.fire({
            title: 'Are You Sure To Delete?',
            showCancelButton: true,
            confirmButtonText: `Delete`
          }).then((result) => {
            /* Delete If Comfirmed */
            if (result.isConfirmed) {
              axios.delete(`${baseURL}/categories/${id}`)
              .then(res=> {
                this.showCategories();
              })

              Swal.fire('Deleted!', '', 'success')
            }
          })
        }
      },
      created() {
        this.showCategories();
      }
    }
    </script>