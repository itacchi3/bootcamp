class Pokemon # ポケモンクラス
  attr_accessor :attack, :hp
  def initialize(attack, hp)
    @attack = attack
    @hp = hp
  end

  def self.battle(pokemon1, pokemon2)
    if pokemon1.attack > pokemon2.attack then
      pokemon2.hp -= pokemon1.attack
    elsif pokemon2.attack > pokemon1.attack then
      pokemon1.hp -= pokemon2.attack
    end
  end
end

pikachu = Pokemon.new(5, 30)
suirtle = Pokemon.new(5, 50)
t = 0
puts ("************************")
puts ("戦闘開始")
puts ("************************")
if pikachu.attack != suirtle.attack then
  while pikachu.hp > 0 && suirtle.hp > 0 do
    t += 1
    Pokemon.battle(pikachu, suirtle)
    puts ("------")
    puts ("第#{t}戦")
    puts ("------")
    puts ("ピカチュウの残りHP: #{pikachu.hp}")
    puts ("ゼニガメの残りHP: #{suirtle.hp}")
  end
else
  puts ("************************")
  puts ("引き分け")
  puts ("************************")
  exit
end

puts ("************************")
puts ("決着！！！")
puts ("************************")
if pikachu.hp > 0 then
  puts("ゼニガメ瀕死，ピカチュウの勝利！！")
else
  puts("ピカチュウ瀕死，ゼニガメの勝利！！")
end