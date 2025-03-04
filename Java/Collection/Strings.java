import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

class Strings{
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        names.add("sachin");
        names.add("naman");
        names.add("mayur");
        
        Iterator<String> it = names.iterator();
        while(it.hasNext()){
            System.out.print(it.next() + " ");
        }

    }
}