  class LRUCache
    def initialize(size)
        @max_num = size
        @cache = []
    end

    def count
        cache.length
    end

    def add(el)
        cache << el if count < max_num
        if cache.include?(el)
            cache.delete(el)
            cache << el
        else  
            cache.shift
            cache << el
        end
    end

    def show
        p cache
    end

    private
    attr_reader :cache, :max_num

  end

  #[lru, el, el, el, most recent entry]
  johnny_cache = LRUCache.new(4)

  johnny_cache.add("I walk the line")
  johnny_cache.add(5)

  p johnny_cache.count # => returns 2

  johnny_cache.add([1,2,3])
  johnny_cache.add(5)
  johnny_cache.add(-5)
  johnny_cache.add({a: 1, b: 2, c: 3})
  johnny_cache.add([1,2,3,4])
  johnny_cache.add("I walk the line")
  johnny_cache.add(:ring_of_fire)
  johnny_cache.add("I walk the line")
  johnny_cache.add({a: 1, b: 2, c: 3})


  johnny_cache.show # => prints [[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}]