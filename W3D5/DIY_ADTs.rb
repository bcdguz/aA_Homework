class Stack

    def initialize
        @stack = []
    end

    def push(el)
        @stack << el
    end

    def pop
        @stack.pop
    end

    def peek
        @stack[0]
    end
end

class Queue

    def initialize
        @queue = []
    end

    def enqueue(el)
        @queue << el
    end

    def dequeue
        @queue.shift
    end

    def peek
        @queue[0]
    end

end


class Map

    def initialize
        @map = []
    end

    def set(key, value)
        @map.each_with_index do |pair, i|
            if key == pair[0]
                @map[i][1] = value
                return 'Key contains new value'
            end
        end
        @map << [key, value]
    end

    def get(key)
        @map.each do |pairs|
            return pairs[1] if pairs[0] == key
        end
    end

    def delete(key)
        @map.each {|pairs| @map.delete(pairs) if pairs[0] == key}
    end

    def show
        @map
    end
end