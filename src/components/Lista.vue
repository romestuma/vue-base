<template>
  <v-data-table :headers="headers" :items="clientes" class="elevation-1">
    <template v-slot:items="props">
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.nome }}</td>
      <td>{{ props.item.email }}</td>
      <td>{{ props.item.fone }}</td>
      <td>{{ props.item.conta_display }}</td>
    </template>
  </v-data-table>
</template>


<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      headers: [
        {
          text: "ID",
          align: "left",
          sortable: false,
          value: "id"
        },
        { text: "Nome", value: "nome" },
        { text: "E-mail", value: "email" },
        { text: "Fone", value: "fone" },
        { text: "Conta", value: "conta_display" }
      ]
    };
  },
  computed: {
    ...mapState(["clientes"])
  },
  methods: {
    ...mapActions(["startClientes"]),
    reload() {
      this.startClientes();
    }
  },
  mounted() {
    this.reload();
  }
};
</script>