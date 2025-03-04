
import java.util.ArrayList;
import java.util.List;

public class ListEx {
    public static void main(String[] args) {
        List<Integer> nums = new ArrayList<>();
        List<Integer> nums2 = new ArrayList<>();
        nums.add(10);
        nums.add(20);
        nums.add(30);

        nums2.add(99);
        nums2.add(67);

        nums.add(1, 35);
        // nums.remove(2);
        //nums.remove(Integer.valueOf(30));
        boolean isPresent = nums.contains(45);
        System.out.println(isPresent);
        nums.set(0, 300);
        nums.set(3, 5000);
        for (Integer i : nums) {
            System.out.print(i + " ");
        }
    }
}
