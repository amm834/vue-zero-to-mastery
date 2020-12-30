<template>
  <div class="container my-3">
    <b-button v-b-toggle.sidebar-1 variant="primary">Mange </b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <b-list-group>
          <b-list-group-item>      <router-link to="/">Admin Dashboard</router-link>
          </b-list-group-item>
          <b-list-group-item>      <router-link to="/categories">Manage Categories</router-link>
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-sidebar>
  </div>
</template>