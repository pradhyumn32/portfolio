#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>
using namespace std;
int majorityElement(vector<int>& nums) {
     stack <int> s;
     int count = 0;
     int n = nums.size();
     sort(nums.begin(), nums.end());
     count = nums[n/2];
     return count; 
     return count;   
    }
    int main(){
        vector<int> v {1};
        int x = majorityElement(v);
        cout<<x;
        return 0;
    }