
import java.util.*;
import java.io.*;
public class Graphs{

    static class Edge{
        int src;
        int nbr;
        int wt;

        Edge(int src, int nbr, int wt){
            this.src = src;
            this.nbr = nbr;
            this.wt = wt;
        }

        public String toString(){
            return this.src+" -> "+this.nbr+" @ "+this.wt;
        }
    }
    public static void main(String args[]) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int vtcs = Integer.parseInt(br.readLine());

        ArrayList<Edge>graph[] = new ArrayList[vtcs]; 
        for(int i=0;i<graph.length; i++){
            graph[i] = new ArrayList<>();
        }

        int edges = Integer.parseInt(br.readLine());
        for(int i=0;i<edges; i++){
            String data[] = br.readLine().split(" ");
            int src = Integer.parseInt(data[0]);
            int nbr = Integer.parseInt(data[1]);
            int wt =  Integer.parseInt(data[2]);

            graph[src].add(new Edge(src,nbr,wt));
            graph[nbr].add(new Edge(nbr,src,wt));
        }

        BFS(graph,0);

        
    }

    public static void display(ArrayList<Edge> graph[]){
        // Display Graph
        for(ArrayList<Edge> list : graph){
            System.out.println(list);
        }
    }

    static class BFSPair{
        int vtx;
        String psf;

        BFSPair(int vtx, String psf){
            this.vtx = vtx;
            this.psf = psf;
        }
    }

    public static void BFS(ArrayList<Edge> graph[], int src){
        boolean visited[] = new boolean[graph.length];
        Queue<BFSPair> que = new ArrayDeque<>();
        que.add(new BFSPair(src,src+""));

        while(que.size() != 0){
            BFSPair peek = que.remove();
            if(visited[peek.vtx] == true) continue;

            visited[peek.vtx] = true;
            System.out.println(peek.vtx+" @ "+peek.psf);
            for(Edge e: graph[peek.vtx]){
                if(visited[e.nbr] == false){
                    que.add(new BFSPair(e.nbr,peek.psf+e.nbr));
                }
            }
        }

    }


// Input:
// 7
// 8
// 0 3 40
// 0 1 10
// 1 2 10
// 3 2 10
// 3 4 2
// 4 5 3
// 4 6 8
// 5 6 3


    // public static void main(String[] args) throws Exception {
    //     BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  
    //     int vtces = Integer.parseInt(br.readLine());
    //     ArrayList<Edge>[] graph = new ArrayList[vtces];
    //     for(int i = 0; i < vtces; i++){
    //        graph[i] = new ArrayList<>();
    //     }
  
    //     int edges = Integer.parseInt(br.readLine());
    //     for(int i = 0; i < edges; i++){
    //        String[] parts = br.readLine().split(" ");
    //        int v1 = Integer.parseInt(parts[0]);
    //        int v2 = Integer.parseInt(parts[1]);
    //        int wt = Integer.parseInt(parts[2]);
    //        graph[v1].add(new Edge(v1, v2, wt));
    //        graph[v2].add(new Edge(v2, v1, wt));
    //     }
  
    //     int src = Integer.parseInt(br.readLine());
    //     int dest = Integer.parseInt(br.readLine());
  
    //     // write your code here
  
    //   }
}