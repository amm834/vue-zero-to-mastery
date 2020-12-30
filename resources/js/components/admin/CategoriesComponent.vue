<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col" colspan="2" class="text-center" >Manage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Web Dev</td>
          <td>
            <!-- Modal -->
            <div>
              <!-- Using modifiers -->
              <b-button v-b-modal.my-modal variant="outline-info" class="float-right"
              >Edit</b-button>

              <!-- The modal -->
              <b-modal id="edit-modal">Hello From My Modal!
              <b-button>Hi</b-button>
              </b-modal>
            </div>
            <!-- Modal End -->
          </td>
          <td>
            <b-button variant="danger">Delete</b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        
      }
    },
    methods:{
      showModal(){
      this.$bvModal.show('edit-modal')
      }
    }
  }
</script>