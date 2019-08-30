### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.

```ruby
# require_relative('card.rb')
class CardGame


  def checkforAce(card) #rename method
    if card.value = 1 #needs to be ==
      return true
    else
      return false
    end
  end

# should be def not dif, first return should be card1, also extra end in code. needs comma between parameters
  dif highest_card(card1 card2) #, should read def not dif, need comma between parameters
  if card1.value > card2.value
    return card #should return card1
  else
    return card2
  end
end #extra end
end


def self.cards_total(cards)
  total #needs to be set to equal 0
  for card in cards
    total += card.value
    return "You have a total of" + total #move return to under the end else it won't loop through all cards
  end
end
```
