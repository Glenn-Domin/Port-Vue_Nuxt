<template>
  <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
    <input id="name" type="text" name="name" placeholder=" " class="form-control" required />
    <input id="email" type="email" name="email" placeholder=" " class="form-control" required />
    <textarea id="message" name="message" placeholder=" " class="form-control" required></textarea>
    <button type="submit" class="btn">Send</button>
  </form>
</template>