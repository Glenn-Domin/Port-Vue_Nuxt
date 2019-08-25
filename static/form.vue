<template>
  <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
    <input type="text" name="name" placeholder=" " class="form-control" required />
    <input type="email" name="email" placeholder=" " class="form-control" required />
    <textarea name="message" placeholder=" " class="form-control" required></textarea>
    <button type="submit" class="btn">Send</button>
  </form>
</template>