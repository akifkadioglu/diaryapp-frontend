<template>
  <div>
    <div class="view mb-15">
      <div v-for="(item, index) in diary" :key="index">
        <v-card width="650" outlined class="mt-5">
          <v-list-item class="mt-2">
            <v-list-item-title class="text-h6">
              {{ item.header }}
            </v-list-item-title>
            <v-btn @click="deleteDiary(item.id, index)" icon color="error">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-list-item>
          <v-card-text class="text-center caption">
            <v-rating
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
              readonly
              :value="item.rate"
            />
          </v-card-text>
          <v-card-text> {{ item.body }} </v-card-text>

          <v-card-actions>
            <v-spacer />
            {{ item.created_at | moment("Do MMMM YYYY, HH:mm") }}
          </v-card-actions>
        </v-card>
      </div>
    </div>
    <FAB :isLoading="isLoading" @download="download" @email="email" />
  </div>
</template>

<script>
import FAB from "../components/Diary/FAB.vue";

export default {
  components: { FAB },
  mounted() {
    this.all_diaries();
  },
  data() {
    return {
      diary: [],
      isLoading: false,
      json: {},
    };
  },

  methods: {
    async all_diaries() {
      this.isLoading = true;
      await this.$axios
        .get("all-diaries", this.form)
        .then((result) => {
          this.diary = result.data.data;
          this.json = result.data;
        })
        .catch(() => {
          this.isLoading = false;
        });

      this.isLoading = false;
    },
    async deleteDiary(id, index) {
      var result = confirm("Want to delete?");
      if (!result) {
        return;
      }
      this.isLoading = true;
      await this.$axios
        .delete("delete-diary", {
          params: {
            id: id,
          },
        })
        .then(() => {
          this.diary.splice(index, 1);
          this.$snackbar.show("Its Deleted");
        })
        .catch(() => {
          this.isLoading = false;
        });

      this.isLoading = false;
    },
    download() {
      const data = JSON.stringify(this.json);
      const blob = new Blob([data], { type: "application/json" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "diary.json";
      link.click();
    },
    email() {
      this.$snackbar.show("Its not working for now, sorry..");
    },
  },
};
</script>
