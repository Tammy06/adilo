<template>
    <div>
        <nav class="border-b border-grey">
            <div class="grid grid-cols-nav w-header-wrapper mx-auto">
                <div>
                    <div class="relative">
                        <a href="#" class="block absolute top-3.5">
                            <div class="w-6 h-6 rounded-md bg-saffron-mango inline-flex items-center justify-center align-top">
                                <div class="w-2/3 h-2/3 rounded-full bg-white"></div>
                            </div>
                            <h3 class="inline ml-3 uppercase font-bold font-helvetica text-rhino relative">adilo</h3>
                        </a>
                    </div>
                </div>
                <div>
                    <div class="flex justify-between">
                        <div><a class="py-4 text-sm menu-item" href="#"><span>Projects</span></a></div>
                        <div>
                            <a class="py-4 text-sm menu-item active" href="#">
                                <span>Tools & App 
                                    <i class="text-xs text-smokey-grey fa-solid fa-angle-down"></i>
                                </span>
                            </a>
                        </div>
                        <div><a class="py-4 text-sm menu-item" href="#"><span>Channels</span></a></div>
                        <div><a class="py-4 text-sm menu-item" href="#"><span>Contacts</span></a></div>
                        <div><a class="py-4 text-sm menu-item" href="#"><span>Analytics</span></a></div>
                        <div><a class="py-4 text-sm menu-item" href="#"><span>Settings</span></a></div>
                    </div>
                </div>
                <div class="relative">
                    <div class="grid grid-cols-2-auto absolute inset-t-1/2 translate-y-1/2 right-0">
                        <div class="border-r border-gray-300 mr-6">
                            <a class="text-rhino text-sm pr-5" href="#">Help</a>
                        </div>
                        <div>
                            <div class="flex align-middle">
                                <div>
                                    <div class="w-7 h-7 rounded-md overflow-hidden">
                                        <img class="w-full h-full object-cover" src="storage/images/profile.jpg" alt="profile image">
                                    </div>
                                </div>
                                <div class="ml-3 -mt-1">
                                    <h5 class="capitalize font-bold text-xs">cody fisher</h5>
                                    <p class="text-xs text-gray-400">codyfisher@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
