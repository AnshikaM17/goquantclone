"""
Program to find the largest string (by length) from a list of strings
"""

def find_largest_string(strings):
    """
    Find and return the string with the most characters
    
    Args:
        strings: List of strings to compare
        
    Returns:
        The string with the maximum length, or None if list is empty
    """
    if not strings:
        return None
    
    largest = strings[0]
    for string in strings:
        if len(string) > len(largest):
            largest = string
    
    return largest


def find_largest_string_builtin(strings):
    """
    Alternative implementation using Python's built-in max() function
    
    Args:
        strings: List of strings to compare
        
    Returns:
        The string with the maximum length, or None if list is empty
    """
    if not strings:
        return None
    
    return max(strings, key=len)


# Example usage
if __name__ == "__main__":
    # Test with sample strings
    test_strings = ["hi", "hello", "hey", "python", "code"]
    
    print("Test strings:", test_strings)
    print()
    
    # Method 1: Using loop
    result1 = find_largest_string(test_strings)
    print(f"Method 1 - Largest string: '{result1}' with {len(result1)} letters")
    
    # Method 2: Using max() built-in
    result2 = find_largest_string_builtin(test_strings)
    print(f"Method 2 - Largest string: '{result2}' with {len(result2)} letters")
    
    print("\n" + "="*50)
    
    # Additional test cases
    test_cases = [
        ["a", "bb", "ccc", "dddd", "eeeee"],
        ["short", "medium text", "this is the longest string here"],
        ["same", "size", "here"],
        ["single"],
        []
    ]
    
    for i, test in enumerate(test_cases, 1):
        result = find_largest_string(test)
        if result:
            print(f"Test {i}: '{result}' ({len(result)} letters) from {test}")
        else:
            print(f"Test {i}: Empty list - No result")
