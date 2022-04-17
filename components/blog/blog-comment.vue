<template>
<div class="blog-comment">
  <span class="comment-reply-title">Leave a Reply </span>
  <p class="comment-notes">email address will not be published Required fields are marked</p>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="py-0"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Your Name *"
            required
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
          class="py-0"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="12"
          class="py-0"
        >
          <v-textarea
            name="input-7-1"
            label="Comment"
            outlined
            required
          ></v-textarea>
        </v-col>

        <v-col
          cols="12"
          md="12"
          class="py-0"
        >
        <v-btn
          x-large color="primary"
          class="button figs-btn"
        >
          Post Comment
        </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</div>
</template>

<script>
export default {
  name: "blog-comment",
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),

}
</script>

<style lang="scss">
.blog-comment
{
  .comment-reply-title {
    color: var(--heading);
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1em;
  }
}

</style>
