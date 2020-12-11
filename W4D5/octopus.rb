def sluggish_octopus(fish)
    longest_fish = fish[0]
    (0...fish.length - 1).each do |i|
        j = i + 1
        (j...fish.length).each do |k|
            if fish[i].length < fish[k].length
                longest_fish = fish[k]
                break
            end
        end
    end
    longest_fish
end

def dominant_octopus(fish) #merge_sort
    sorted = merge_sort(fish)
    sorted[-1]
end

def merge_sort(arr)
    mid = arr.length/2
    return arr if arr.length < 2
    left = merge_sort(arr[0...mid])
    right = merge_sort(arr[mid..-1])
    merge(left, right)
end

def merge(left,right)
    merged = []
    until left.empty? || right.empty?
        if left.first.length < right.first.length
            merged << left.shift
        else  
            merged << right.shift
        end
    end
    merged + left + right
end


def clever_octopus(fish)
    longest = fish[0]
    fish.each { |fishy| longest = fishy if fishy.length > longest.length }
    longest
end

tiles_hash = {}
tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
tiles_array.each_with_index {|tile,i| tiles_hash[tile] = i}


def slow_dance(dir, arr)
    arr.each_with_index {|tile,i| return i if tile == dir}
end


def constant_dance(dir,tiles_hash)
    tiles_hash[dir]
end