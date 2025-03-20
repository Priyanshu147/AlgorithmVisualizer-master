import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'



const algorithms = [
  {
    id: 'pathfinder',
    title: "Pathfinder",
    description: "Visualize graph algorithms like dijkstra, BFS, DFS",
    image: '/AlgorithmVisualizer/images/graph.png?height=200&width=300'
  },
  {
    id: 'sorting',
    title: 'Sorting Algorithm',
    description: "Compare different sorting algorithms",
    image: '/AlgorithmVisualizer/images/sort.png?height=200&width=300'
  },
  {
    id: 'recursive-sorting',
    title: 'Recursive Sorting',
    description: "Compare different recursive sorting algorithms",
    image: '/AlgorithmVisualizer/images/sort.png?height=200&width=300'
  },
]

export function AlgorithmCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {algorithms.map((algorithm) => (
        <Link key={algorithm.id} href={`/${algorithm.id}`} className="block group">
          <Card className="overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col">
            <div className="relative h-48">
              <Image
                src={algorithm.image}
                alt={algorithm.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader className="flex-grow">
              <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                {algorithm.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <p className="text-lg text-muted-foreground">{algorithm.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

