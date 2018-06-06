<template>
    <div>
         <router-link to="/login">
        上一页
        </router-link>
       
        serve
          <router-link to="/login/server/main">
        下一页
        </router-link>
    </div>
</template>

<script>
export default {
    created(){
        console.log('server')
    }
}
</script>

<style>

</style>
