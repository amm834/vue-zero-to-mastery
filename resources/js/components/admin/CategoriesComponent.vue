<template>
 <div>
  <!-- Create Category Action -->

  <div>
   <!-- Create Button -->
   <b-button id="show-btn" @click="showModal" variant="success" class="float-right my-3">
    <i class="fa fa-plus d-inline mx-1"></i>
    Create
   </b-button>
   <!-- Create Modal -->
   <b-modal ref="my-modal" hide-footer title="Create A New Category">
    <!-- Category Create Form -->
    <form @submit.prevent="createCategory">
     <!-- Display Preview Image -->
     <img src="" alt="404 not found!" ref="displayImage" v-if="category.image.name" class="img-fluid my-3" />

     <!-- Title -->
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
   <!-- Edit Modal Start -->
   <b-modal ref="edit-modal" hide-footer title="Edit Category">
    <!-- Category Create Form -->
    <form @submit.prevent="updateCategory">
     <!-- Display Edit Preview Image -->
     <img :src="`${storagePath}/storage/${editCategoryData.image}`" alt="404 not found!" ref="displayImage" class="img-fluid my-3" />

     <!-- Title -->
     <div class="mb-3">
      <label for="title" class="form-label"
       >Title</label>
      <input type="text" class="form-control" id="title"
      v-model="editCategoryData.title"
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
      @change="editAttachFile"
      :class="errors.image ? 'is-invalid' : ''"
      >
      <p v-if="errors.title" :class="errors.image ? 'invalid-feedback' : ''">
       {{errors.image[0]}}
      </p>

     </div>
     <!-- Form Footer -->
     <div class="row d-flex justify-content-end">
      <b-button class="mt-3" variant="outline-danger"  @click="hideEditModal">Cancel</b-button>
      <b-button class="mt-3 mx-3" variant="success"  @click="showModal" type="submit">Update</b-button>
     </div>
    </form>
   </b-modal>
  </div>
  <!-- Edit Modal End -->

  <!-- Responsive Table -->

  <div class="table-responsive">
   <!-- Categories Table -->
   <table class="table table-striped">
    <thead>
     <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col" class="text-center">Image</th>
      <th scope="col" colspan="2" class="text-center">Manage</th>
     </tr>
    </thead>
    <tbody>
     <tr v-for="(category,index) in categories.data" :key="category.id"
      >
      <th scope="row">{{index+1}}</th>
      <td>{{category.title}}</td>
      <td>
       <img :src="`${storagePath}/storage/${category.image}`" alt="" height="100" width="100">
      </td>
      <td>
       <!-- Edit Category -->
       <b-button variant="outline-info" class="float-right" @click="editCategory(category)">
        <i class="fa fa-edit"></i>
        Edit
       </b-button>
      </td>
      <td>
       <b-button variant="danger" @click="deleteCategory(category.id)">
        <i class="fa fa-trash"></i>
        Delete
       </b-button>
      </td>
     </tr>
    </tbody>
   </table>
  </div>

  <!-- Pagination  -->
  <pagination :data="categories" @pagination-change-page="showCategories" class="my-3"></pagination>
  <!-- Responsive Table End -->

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
    storagePath: `${serverPath}`,
    editCategoryData: '',
   }
  },
  methods: {
   /* Show Category Modal */
   showModal() {
    this.$refs['my-modal'].show();
   },
   showEditModal() {
    this.$refs['edit-modal'].show();
   },
   /* Hide Category Modal */
   hideModal() {
    this.$refs['my-modal'].hide()
   },
   hideEditModal() {
    this.$refs['edit-modal'].hide()
   },
   /* Create New Category via Backend */
   createCategory() {
    /* Send image through Form Data !important */
    let createCat = new FormData();
    createCat.append('title', this.category.title);
    createCat.append('image', this.category.image);

    /* Post Form Data */
    axios.post(`${baseURL}/categories`, createCat)
    .then(res=> {
     this.hideModal();
     this.category.title = '';
     // If success show success toast
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
   /* Insert Image via onchange event */
   uploadFile(event) {
    /* Get binary file from onchange event */
    this.category.image = event.target.files[0];
    // File Reader To shoe Preview image
    let reader = new FileReader();
    reader.onload = (e)=> {
     this.$refs.displayImage.src = reader.result;
    }
    // Read As Image or Binary File
    reader.readAsDataURL(this.category.image);
   },
   editAttachFile(event) {
    /* Get binary file from onchange event */
    this.editCategoryData.image = event.target.files[0];
    // File Reader To shoe Preview image
    let reader = new FileReader();
    reader.onload = (e)=> {
     this.$refs.displayImage.src = reader.result;
    }
    // Read As Image or Binary File
    reader.readAsDataURL(this.editCategoryData.image);
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
   /* Delete Category */
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
   },
   /* Edit Category */
   editCategory(category) {
    this.showEditModal();
    this.editCategoryData = {
     ...category
    };
   },
   updateCategory() {
    this.hideModal();
    let formdata = new FormData();
    formdata.append('title',
     this.editCategoryData.title);
    formdata.append('image',
     this.editCategoryData.image);
    formdata.append('_method',
     'put');
    axios.post(`${baseURL}/categories/${this.editCategoryData.id}`,
     formdata)
    .then(res=> {
     this.hideModal();
     this.hideEditModal();
     this.showCategories();
    })
    .catch(err=> {
     this.errors = err.response.data.errors;
    })
   }

  },
  created() {
   this.showCategories();
  }
 }
 </script>