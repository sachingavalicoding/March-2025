
import java.util.Set;
import java.util.TreeSet;

public class RemoveDuplicates {
    public static void main(String [] args){
        int [] arr = {10,3,34,34,43,34};

        Set<Integer> set = new TreeSet<>();
        for(int i : arr){
            set.add(i);
        }
        for(Integer num : set){
            System.out.print(num + "  ");
        }
    }
}
