module.exports = {
  entry: "./scripts/scripts1.js",
  devtool: "inline-source-map",
  output: {
    filename:"./bundle.js"
  },
  module: {
    rules: [//specify dif configuration options for how to load files
      {
        test: /\.js$/,
        use:[
          'babel-loader' //will have to install this. webpack just does the bundling
        ]
      },
      {test:/\.scss$/,
      use:[{
        loader:"style-loader"
      },{
        loader:"css-loader", 
        options:{
          sourceMap: true
        }
      },{
        loader:"sass-loader",
        options:{
          sourceMap: true
        }
      }],
   }
    ]
  },
  devServer: {
    inline: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
}