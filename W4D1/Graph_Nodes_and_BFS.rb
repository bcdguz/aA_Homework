class GraphNode
    attr_reader :value
    attr_accessor :neighbors

    def initialize(value)
        @value = value
        @neighbors = []
    end

    
end

def bfs(start_node, target_value)
    queue = [start_node]
    visited = []
    until queue.empty?
        top_node = queue.shift
        return top_node if target_value == top_node.value
        top_node.neighbors.each {|node| queue << node if !visited.include?(node)}
        visited << top_node
    end
    nil
end


a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors += [b, c, e]
c.neighbors += [b, d]
e.neighbors += [a]
f.neighbors += [e]

p bfs(a,'b')
p bfs(a,'f')