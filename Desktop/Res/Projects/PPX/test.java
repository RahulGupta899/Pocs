import java.util.*;
public class test {
	public static int[] anagramMappings(int[] arr1, int[] arr2) {
		HashMap<Integer,Queue<Integer>> hm = new HashMap<>();
        int idxs[] = new int[arr1.length];
		for(int i=0; i<arr2.length; i++){ 
            if(hm.containsKey(arr2[i])){
                Queue<Integer> q = hm.get(arr2[i]);
                q.add(i);
            }
            else{
                Queue<Integer> q = new ArrayDeque<>();
                q.add(i);
                hm.put(arr2[i],q);
            }
		}
		
        for(int i=0;i<arr1.length; i++){
            Queue<Integer> que = hm.get(arr1[i]);
            idxs[i] = que.remove();
        }

		return idxs;
	}

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		int[] a = new int[n];
		int[] b = new int[n];
		for (int i = 0; i < a.length; i++) {
			a[i] = s.nextInt();
		}
		for (int j = 0; j < b.length; j++) {
			b[j] = s.nextInt();
		}
		int[] res = anagramMappings(a, b);
		for (int j = 0; j < res.length; j++) {
			System.out.print(res[j] + " ");
		}
	}

}
