
import java.util.ArrayList;
import java.util.List;

public class ListString {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();

        list.add("one");
        list.add("two");
        boolean isRemove =  list.remove("three");
        boolean isRemove1 =  list.remove("one");
        System.out.println(isRemove);
        System.out.println("Element is removed "+isRemove1);
        for(String s : list){
            System.out.print(s + " ");
        }
        
    }
}
