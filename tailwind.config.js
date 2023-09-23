import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content :  ["./inedx.html" ,

                "./src/**/*.{vue,js,jsx}",
		"./index.html",
 ],
    theme : {
	extends:{
	     fontFamily: {
               /* sans: ['Figtree', ...defaultTheme.fontFamily.sans],*/
            },   	

	},
    },
    plugins :[],
}
