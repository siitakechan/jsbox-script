var menu = "米饭🍚,炒米饭,黄焖鸡米饭,锅巴饭,烤肉饭,鸡蛋面,香菇面,炒面,拉面🍜,小面,蘸水面,干拌面,包子,饺子🥟,凉皮,米皮,擀面皮,肉夹馍,煎饼🥞,炸鸡🍗,汉堡🍔,披萨🍕,面包🍞,薯条🍟,蛋糕🍰,寿司🍣,热狗🌭️,虾🦐,火锅🍲,苹果🍎,梨子🍐,橘子🍊,葡萄🍇,椰子🥥,菠萝🍍,桃子🍑,玉米🌽,草莓🍓,西瓜🍉,哈密瓜🍈,奶茶,咖啡☕️"

var foods = menu.split(",")
var timer
var btstart = "~ BIU ~"
var btstop = "- STOP -"
var labdefault = "🤪🤪🤪"


$ui.render({
  views: [{
    type: "button",
    props: {
      id: "button",
      title: btstart,
      font: $font(32),
      bgcolor: $color("#167EFA")
    },
    layout: function(make, view) {
      make.height.equalTo(48)
      make.centerX.equalTo(view.super)
      make.bottom.left.right.inset(10)
    },
    events: {
      tapped: function(sender) {
        var btn = $("button")
        if (btn.title == btstart) {
          btn.title = btstop
          var i = 0
          timer = $timer.schedule({
            interval: 0.05,
            handler: function() {
              var food = foods[Math.floor(Math.random() * foods.length)]
              $("label").text = food
              if (i++ > 100) {
                timer.invalidate()
                $("button").title = btstart
              }
            }
          })
        } else {
          btn.title = btstart
          timer.invalidate()
        }
      }
    }
  }, {
    type: "label",
    props: {
      id: "label",
      text: labdefault,
      font: $font(52),
      align: $align.center
    },
    layout: function(make, view) {
      make.left.right.inset(10)
      make.top.inset(48)
      make.centerX.equalTo(view.super)
    }
  }]
})

// by. siitake