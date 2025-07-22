import React, { createContext, useContext, useState, useEffect } from "react";

// إنشاء السياق
export const CommentsContext = createContext();

// كستم هوك للوصول إلى السياق بسهولة
export const useComments = () => useContext(CommentsContext);

// المزود (Provider)
export const CommentsProvider = ({ children }) => {
  // تعليقات كل منتج محفوظة حسب ID
  const [commentsByProduct, setCommentsByProduct] = useState(() => {
    const saved = localStorage.getItem("commentsByProduct");
    return saved ? JSON.parse(saved) : {};
  });

  // إضافة تعليق جديد لمنتج محدد
  const addCommentToProduct = (productId, newComment) => {
    setCommentsByProduct(prev => {
      const updated = {
        ...prev,
        [productId]: prev[productId]
          ? [...prev[productId], newComment]
          : [newComment],
      };
      return updated;
    });
  };

  // حفظ التعليقات في localStorage عند التغيير
  useEffect(() => {
    localStorage.setItem("commentsByProduct", JSON.stringify(commentsByProduct));
  }, [commentsByProduct]);

  return (
    <CommentsContext.Provider value={{ commentsByProduct, addCommentToProduct }}>
      {children}
    </CommentsContext.Provider>
  );
};
